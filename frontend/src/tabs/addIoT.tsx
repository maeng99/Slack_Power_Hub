import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Nav from '../components/nav.tsx';
import '../App.css';

var API_SERVER_DOMAIN = 'http://3.36.15.193:3000/';

function getIoTInfo() {
    return fetch(API_SERVER_DOMAIN + 'users/1/plugs', {
        method: 'GET',
    }).then((res) => {
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        return res.json();
    });
}

function deleteIoTInfo(name: string) {
    return fetch(API_SERVER_DOMAIN + 'users/1/plugs/' + name, {
        method: 'DELETE',
    })
        .then((res) => {
            console.log(res);
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
        })
        .then(() => {
            alert('삭제되었습니다.');
            window.location.reload();
        });
}

export default function AddIoT() {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [hover, setHover] = useState(false);
    const [iotList, setIotList] = useState([]);

    useEffect(() => {
        getIoTInfo()
            .then((data) => {
                setIotList(data);
            })
            .catch((error) => {
                console.error('Failed to fetch:', error);
            });
    }, []);

    const onValid = (data) => {
        console.log(data, 'onValid');

        fetch(API_SERVER_DOMAIN + 'users/1/plugs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.ID,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to publish post');
                }
                return response.json();
            })
            .then(() => {
                alert('등록되었습니다.');
                window.location.reload();
            })
            .catch((error) => {
                console.error('Failed to publish post:', error);
            });
    };

    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('연결이 불가능합니다. 고유번호와 연결장치를 확인해주세요');
    };

    const handleDelete = (id: string) => {
        deleteIoTInfo(id)
            .then(() => {
                setIotList((prevList) => prevList.filter((iot) => iot.id !== id));
            })
            .catch((error) => {
                console.error('Failed to delete:', error);
            });
    };

    return (
        <div className="background">
            <Nav />
            <form
                onSubmit={handleSubmit(onValid, onInvalid)}
                style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}
            >
                <div style={{ width: '700px', marginTop: '100px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="text"
                            {...register('ID', {
                                required: '기기의 고유번호를 입력해주세요.',
                            })}
                            placeholder="기기의 고유번호"
                            style={{
                                width: '300px',
                                height: '20px',
                                marginRight: '10px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderRadius: '0',
                                borderBottom: '1px solid #000',
                            }}
                        />
                        <input
                            type="text"
                            {...register('Device', {
                                required: '연결된 장치를 입력해주세요.',
                            })}
                            placeholder="연결장치"
                            style={{
                                width: '300px',
                                height: '20px',
                                marginRight: '10px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderRadius: '0',
                                borderBottom: '1px solid #000',
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                fontSize: '14px',
                                width: '80px',
                                height: '25px',
                                textAlign: 'center',
                                backgroundColor: '#90DBFE',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            입력완료
                        </button>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        {errors.ID && (
                            <span
                                style={{
                                    color: 'red',
                                    fontSize: '12px',
                                    textAlign: 'left',
                                    position: 'absolute',
                                    marginLeft: '0px',
                                }}
                            >
                                * {errors.ID.message}
                            </span>
                        )}
                        {errors.Device && (
                            <span
                                style={{
                                    color: 'red',
                                    fontSize: '12px',
                                    textAlign: 'left',
                                    position: 'absolute',
                                    paddingLeft: '310px',
                                }}
                            >
                                * {errors.Device.message}
                            </span>
                        )}
                    </div>
                </div>
            </form>

            <div className="IoT_div" style={{ width: '700px', margin: '0 auto', marginTop: '50px' }}>
                {/* 이 부분에 IoT 동적 할당 */}
                {iotList.map((iot) => (
                    <div
                        className="IoT_list"
                        key={iot.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '10px',
                        }}
                    >
                        <span style={{ fontSize: '18px', fontWeight: '600' }}>
                            {iot.id}번 ID: {iot.name} 연결장치: 스탠드
                        </span>
                        <img
                            src="..\img\trash.png"
                            style={{ width: '25px', cursor: 'pointer' }}
                            onClick={() => handleDelete(iot.name)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
