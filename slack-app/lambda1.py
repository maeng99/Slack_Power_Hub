import json
import os
from tuya_connector import TuyaOpenAPI, TuyaOpenPulsar, TuyaCloudPulsarTopic

ACCESS_ID = os.environ['ACCESS_ID']
ACCESS_KEY = os.environ['ACCESS_KEY']
DEVICE_ID = os.environ['DEVICE_ID']
ENDPOINT = os.environ['ENDPOINT']
MQ_ENDPOINT = os.environ['MQ_ENDPOINT']


def lambda_handler(event, context):
    openapi = TuyaOpenAPI(ENDPOINT, ACCESS_ID, ACCESS_KEY)
    openapi.connect()
    open_pulsar = TuyaOpenPulsar(ACCESS_ID, ACCESS_KEY, MQ_ENDPOINT, TuyaCloudPulsarTopic.PROD)

    open_pulsar.add_message_listener(lambda msg: print(f"Received message: {msg}"))

    open_pulsar.start()

    def get_device_status(device_id):
        response = openapi.get(f'/v1.0/devices/{device_id}/status')
        if response['success']:
            for status in response['result']:
                if status['code'] == 'switch_1':
                    return status['value']
        return None

    def control_smart_plug(device_id, status):
        commands = [{'code': 'switch_1', 'value': status}]
        response = openapi.post(f'/v1.0/devices/{device_id}/commands', {'commands': commands})
        return response

    current_status = get_device_status(DEVICE_ID)
    if current_status is not None:
        new_status = not current_status
        response = control_smart_plug(DEVICE_ID, new_status)
        print(f'Smart Plug Toggled: {response}')
    else:
        print('Failed to get the current status of the device')

    open_pulsar.stop()

    return {
        'statusCode': 200,
        'body': json.dumps('Smart Plug status toggled successfully')
    }