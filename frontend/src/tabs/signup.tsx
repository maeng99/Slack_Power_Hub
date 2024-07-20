import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/button.tsx';
import '../App.css';

export default function Signup() {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [hover, setHover] = useState(false);

    const onValid = (e) => {
        console.log(e, 'onValid');
        alert('회원가입이 완료되었습니다.');
        window.location = '/';
    };

    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    };

    return (
        <div className="background">
            <div style={{ display: 'flex', justifyContent: 'right', marginRight: '20px', marginTop: '20px' }}>
                <Button
                    type="logout"
                    size="small"
                    title="로그인"
                    onClick={() => {
                        window.location = '/';
                    }}
                />
            </div>
            <div style={{ marginTop: '45 px', marginBottom: '40px' }}>
                <img src="..\img\main_logo.png" style={{ width: '200px' }} />
                <br />
                <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: '600' }}>회원가입</div>
            </div>

            <form onSubmit={handleSubmit(onValid, onInvalid)} style={{ textAlign: 'center' }}>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <input
                        type="text"
                        {...register('ID', {
                            required: '아이디를 입력해주세요.',
                        })}
                        placeholder="아이디"
                        style={{ width: '400px', height: '20px' }}
                    />
                    {errors.ID && (
                        <span style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}>
                            * {errors.ID.message}
                        </span>
                    )}
                </div>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <input
                        type="password"
                        {...register('Password', {
                            required: '비밀번호를 입력해주세요.',
                        })}
                        placeholder="비밀번호"
                        style={{ width: '400px', height: '20px', marginTop: '10px' }}
                    />
                    {errors.Password && (
                        <span style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}>
                            * {errors.Password.message}
                        </span>
                    )}
                </div>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <input
                        type="password"
                        {...register('RePassword', {
                            required: '비밀번호를 확인해주세요.',
                        })}
                        placeholder="비밀번호 확인"
                        style={{ width: '400px', height: '20px', marginTop: '10px' }}
                    />
                    {errors.RePassword && (
                        <span style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}>
                            * {errors.RePassword.message}
                        </span>
                    )}
                </div>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <input
                        type="text"
                        {...register('Name', {
                            required: '이름을 입력해주세요.',
                        })}
                        placeholder="이름"
                        style={{ width: '400px', height: '20px', marginTop: '10px' }}
                    />
                    {errors.Name && (
                        <span style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}>
                            * {errors.Name.message}
                        </span>
                    )}
                </div>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <input
                        type="number"
                        {...register('Birth', {
                            required: '생년월일을 입력해주세요.',
                            pattern: {
                                value: /^[0-9]{8,8}$/,
                                message: '생년월일은 8글자를 입력해주세요.(ex 20240101)',
                            },
                        })}
                        placeholder="생년월일(ex 20240101)"
                        style={{ width: '400px', height: '20px', marginTop: '10px' }}
                    />
                    {errors.Birth && (
                        <span style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}>
                            * {errors.Birth.message}
                        </span>
                    )}
                </div>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <input
                        type="number"
                        {...register('PhoneNum', {
                            required: '전화번호를 입력해주세요.',
                            minLength: {
                                value: 11,
                                message: "전화번호는 '-'를 제외한 11자리를 입력해주세요.(ex 01012345678)",
                            },
                            maxLength: {
                                value: 11,
                                message: "전화번호는 '-'를 제외한 11자리를 입력해주세요.(ex 01012345678)",
                            },
                        })}
                        placeholder="전화번호(ex 01012345678)"
                        style={{ width: '400px', height: '20px', marginTop: '10px' }}
                    />
                    {errors.PhoneNum && (
                        <span style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}>
                            * {errors.PhoneNum.message}
                        </span>
                    )}
                </div>

                <div style={{ marginTop: '40px', paddingBottom: '20px' }}>
                    <button
                        type="submit"
                        style={{
                            fontSize: '18px',
                            width: '200px',
                            height: '40px',
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
                        입력 완료
                    </button>
                </div>
            </form>
        </div>
    );
}
