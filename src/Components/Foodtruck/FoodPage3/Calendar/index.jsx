import React from 'react';
import classnames from 'classnames';

import * as calendar from './calendar';

import './index.scss';

export default class Calendar extends React.Component {



    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,2021,2022,2023],
        monthNames: ['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս', 'Օգոստոս', 'Սեպտեմբեր', 'Հոկտեմբեր', 'Նոյեմբեր', 'Դեկտեմբեր'],
        // monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['երկ', 'երք', 'չրք', 'հնգ' , 'ուրբ', 'շբթ', 'կիր'],

    };



    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => {
        this.setState({ selectedDate: date });

        this.props.Change(date);
    };

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar">
                <header>


                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                        disabled
                    >
                        {monthNames.map((name, index) =>
                            <option selected disabled key={name} value={index}>{name}</option>
                        )}
                    </select>

                    {/* <select
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {years.map(year =>
                            <option key={year} value={year}>{year}</option>
                        )}
                    </select> */}
                    {/*<button onClick={(e)=>{*/}
                    {/*    e.preventDefault()*/}
                    {/*    this.handlePrevMonthButtonClick()*/}
                    {/*}}>{'<'}</button>*/}
                    <div className="btndata">
                        <svg width=" 3.3088235294117645vw" height="1.0294117647058822vw" viewBox="0 0 45 14"  xmlns="http://www.w3.org/2000/svg" onClick={this.handlePrevMonthButtonClick}>
                            <path d="M2.60665e-07 6.99994L15 12.7686L15 1.23128L2.60665e-07 6.99994Z" />
                            <rect width="30" height="1.66541" transform="matrix(-1 0 0 1 45 6.16724)"/>
                        </svg>
                        <svg  width=" 3.3088235294117645vw" height="1.0294117647058822vw" viewBox="0 0 45 14"  xmlns="http://www.w3.org/2000/svg" onClick={this.handleNextMonthButtonClick}>
                            <path d="M45 6.99994L30 12.7686L30 1.23128L45 6.99994Z" />
                            <rect y="6.16724" width="30" height="1.66541" />
                        </svg>
                    </div>



                </header>

                <table>
                    <thead>
                    <tr className="menu2">
                        {weekDayNames.map(name =>
                            <th key={name}>{name}</th>
                        )}
                    </tr>
                    </thead>

                    <tbody className="caledarconstr">
                    {monthData.map((week, index) =>
                        <tr key={index} className="week">
                            {week.map((date, index) => date ?
                                <td
                                    key={index}
                                    className={classnames('day', {
                                        'today': calendar.areEqual(date, currentDate),
                                        'selected': calendar.areEqual(date, selectedDate)
                                    })}
                                    onClick={() => this.handleDayClick(date)}
                                >{date.getDate()}</td>
                                :
                                <td key={index} />
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}