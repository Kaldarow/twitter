'use client';
import React from 'react';
import { Button, Select } from 'antd';
import '@/app/src/pages/auth/auth.scss';

import {
    AppleFilled,
    CloseOutlined,
    GoogleCircleFilled,
    XOutlined,
} from '@ant-design/icons';
import { Option } from 'antd/es/mentions';
import Item from 'antd/es/list/Item';
interface DateData {
    days: number[];
    months: string[];
    years: number[];
}

const Auth = () => {
    const dateData: DateData = {
        days: Array.from({ length: 31 }, (_, i) => i + 1), // Массив от 1 до 31
        months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
        years: Array.from({ length: 101 }, (_, i) => 1920 + i), // Массив от 1920 до 2020
    };

    const [modalVisibleRegistration, setModalVisibleRegistration] =
        React.useState(false);
    const [modalVisibleLogin, setModalVisibleLogin] = React.useState(false);

    const handleModalVisibleToggle = () => {
        setModalVisibleRegistration(!modalVisibleRegistration);
    };
    const handleModalLoginVisibleToggle = () => {
        setModalVisibleLogin(!modalVisibleLogin)
    }
    return (
        <div className="auth">
            <div className="left">
                <XOutlined className="left__bg" />
                {/* <div className="left__bg"></div> */}
            </div>

            <div className="right">
                <h2 className="text title">
                    В курсе <br /> происходящего
                </h2>
                <h3 className="text subtitle">Присоединяйтесь сегодня.</h3>

                <div className="buttons">
                    <Button className="button">
                        <GoogleCircleFilled />
                        <p className="text__black">
                            Регистрация с помощью Google
                        </p>
                    </Button>
                    <Button className="button button__apple">
                        <AppleFilled />
                        <p className="text__black">
                            Зарегистрироваться с Apple ID
                        </p>
                    </Button>
                </div>

                <div className="or_container">
                    <span className="line"></span>
                    <p className="text or">или</p>
                    <span className="line"></span>
                </div>

                <Button
                    type="primary"
                    className="sign-up"
                    onClick={handleModalVisibleToggle}
                >
                    Зарегистрироваться
                </Button>

                <p className="text provisions">
                    Регистрируясь, вы соглашаетесь с{' '}
                    <a className="link" href="#">
                        Условиями предоставления услуг и Политикой
                        конфиденциальности
                    </a>
                    , а также с
                    <a className="link" href="#">
                        {' '}
                        Политикой использования файлов cookie.
                    </a>
                </p>

                <div>
                    <h4 className="text question">Уже зарегистрированы?</h4>
                    <Button
                        className="sign-in"
                        onClick={handleModalLoginVisibleToggle}
                    >
                        Войти
                    </Button>
                </div>
            </div>
            {modalVisibleRegistration ? (
                <div className="registration">
                    {/* // ! Модалка на регистрацию */}
                    <div className="modal">
                        <div className="top">
                            <CloseOutlined
                                onClick={handleModalVisibleToggle}
                                className="close"
                            />
                            <XOutlined className="logo" />
                        </div>

                        <div className="block_inputs">
                            <h2 className="text title">
                                Создайте учетную запись
                            </h2>
                            <input
                                className="inputs"
                                type="text"
                                placeholder="Имя"
                                name=""
                                id=""
                            />
                            <input
                                className="inputs"
                                type="text"
                                placeholder="Телефон"
                                name=""
                                id=""
                            />
                            <a className="link" href="">
                                Использовать почту
                            </a>
                        </div>
                        <div className="info">
                            <h5 className="text h5">Дата рождения</h5>
                            <p className="text p">
                                Эта информация не будет общедоступной.
                                Подтвердите свой возраст, даже если эта учетная
                                запись предназначена для компании, домашнего
                                животного и т. д.
                            </p>
                        </div>
                        <div className="selectors">
                            {/* <select value="Месяц"></select> */}
                            <Select
                                className="select__item"
                                defaultValue={'Месяц'}
                                options={dateData.months.map((item) => ({
                                    value: item,
                                    label: item,
                                }))}
                            />

                            <Select
                                className="select__item"
                                defaultValue={'День'}
                                options={dateData.days.map((item) => ({
                                    value: item,
                                    label: item,
                                }))}
                            />

                            <Select
                                className="select__item"
                                defaultValue={'Год'}
                                options={dateData.years.map((item) => ({
                                    value: item,
                                    label: item,
                                }))}
                            />
                        </div>
                        <Button className="next">Далее</Button>
                    </div>
                </div>
            ) : null}
            {/* //! Модалка на авторизацию */}
            {modalVisibleLogin ? (
                <div className="modal">
                    <div className="top">
                        <CloseOutlined
                            onClick={handleModalLoginVisibleToggle}
                            className="close"
                        />
                        <XOutlined className="logo" />
                    </div>
                    <div>Вход в Х</div>
                    <div className="buttons">
                        <Button className="button">
                            <GoogleCircleFilled />
                            <p className="text__black">
                                Регистрация с помощью Google
                            </p>
                        </Button>
                        <Button className="button button__apple">
                            <AppleFilled />
                            <p className="text__black">
                                Зарегистрироваться с Apple ID
                            </p>
                        </Button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Auth;
