import json
import os
from tuya_connector import TuyaOpenAPI

ACCESS_ID = os.environ['ACCESS_ID']
ACCESS_KEY = os.environ['ACCESS_KEY']
ENDPOINT = os.environ['ENDPOINT']

def lambda_handler(event, context):
    try:
        if 'body' in event:
            message = json.loads(event['body'])
        else:
            message = event
    except (json.JSONDecodeError, KeyError, TypeError) as e:
        print(f"Invalid input: {str(e)}")
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid input'})
        }

    id_value = message.get('id')
    desired_status = message.get('status', '').lower()

    if not desired_status in ['on', 'off']:
        print("Invalid status value")
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid status value'})
        }

    if str(id_value) == "1":
        DEVICE_ID = os.environ['DEVICE_ID']
    elif str(id_value) == "2":
        DEVICE_ID = os.environ['DEVICE_ID']
    else:
        print("Unsupported id value")
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Unsupported id value'})
        }
    
    try:
        openapi = TuyaOpenAPI(ENDPOINT, ACCESS_ID, ACCESS_KEY)
        openapi.connect()
    except Exception as e:
        print(f"Failed to connect to Tuya API: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': f'Failed to connect to Tuya API: {str(e)}'})
        }

    def get_device_status(device_id):
        try:
            response = openapi.get(f'/v1.0/devices/{device_id}/status')
            print(f"Device status response: {response}")
            if response['success']:
                for status in response['result']:
                    if status['code'] == 'switch_1':
                        return status['value']
        except Exception as e:
            print(f"Error getting device status: {str(e)}")
        return None

    def control_smart_plug(device_id, status):
        try:
            commands = [{'code': 'switch_1', 'value': status}]
            response = openapi.post(f'/v1.0/devices/{device_id}/commands', {'commands': commands})
            print(f"Control smart plug response: {response}")
            return response
        except Exception as e:
            print(f"Error controlling smart plug: {str(e)}")
            return None

    current_status = get_device_status(DEVICE_ID)
    print(f"Current status: {current_status}")

    if current_status is not None:
        if (current_status and desired_status == 'on') or (not current_status and desired_status == 'off'):
            final_status = 'on' if current_status else 'off'
        else:
            new_status = (desired_status == 'on')
            response = control_smart_plug(DEVICE_ID, new_status)
            if response and response.get('success'):
                final_status = 'on' if new_status else 'off'
            else:
                print("Failed to control the device")
                return {
                    'statusCode': 500,
                    'body': json.dumps({'error': 'Failed to control the device'})
                }
        return {
            'statusCode': 200,
            'body': json.dumps({'id': id_value, 'status': final_status})
        }
    else:
        print("Failed to get the current status of the device")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Failed to get the current status of the device'})
        }
