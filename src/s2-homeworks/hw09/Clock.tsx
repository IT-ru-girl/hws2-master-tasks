// import React, {useState} from 'react'
// import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
// import {restoreState} from '../hw06/localStorage/localStorage'
// import s from './Clock.module.css'
//
// function Clock() {
//     const [timerId, setTimerId] = useState<number | undefined>(undefined)
//     // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
//     const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
//     const [show, setShow] = useState<boolean>(false)
//
//     const start = () => {
//         // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
//         // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
//
//         const Id = +setInterval( ()=>{
//             setDate(new Date())
//         }, 1000)
//         setTimerId(Id)
//
//     }
//
//     const stop = () => {
//         // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
//
//         clearInterval(timerId)
//         setTimerId(undefined)
//     }
//
//     const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
// setShow(true)
//     }
//     const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
// setShow(false)
//     }
//
//     let getTime = new Intl.DateTimeFormat("ru", {
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric"
//     });
//
//
//     const stringTime = getTime.format(date)
//         // new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
//         || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
//
//     let getDate = new Intl.DateTimeFormat("ru");
//
//     // const stringDate = `${+date.toLocaleString("en-US", {day: 'numeric'}) < 10 ? `0`+date.toLocaleString("en-US", {day: 'numeric'}) : date.toLocaleString("en-US", {day: 'numeric'}) }.${date.getMonth()+1}.${date.getFullYear()}` || <br/>
//
//     const stringDate = getDate.format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
//
//     // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
//
//     // let getDay = new Intl.DateTimeFormat('en-US',{
//     //     weekday: 'long'
//     // });
//     // const stringDay = getDay.format(date) || <br/> // пишут студенты
//     const stringDay = date.toLocaleTimeString('en-US', { weekday: 'long'})/*date.getDay()*/ || <br/>
//
//     let getMonth = new Intl.DateTimeFormat("en",{
//         month: 'long'
//     });
//     const stringMonth = getMonth.format(date) || <br/> // пишут студенты
//     console.log(date.getDay())
//     return (
//         <div className={s.clock}>
//             <div
//                 id={'hw9-watch'}
//                 className={s.watch}
//                 onMouseEnter={onMouseEnter}
//                 onMouseLeave={onMouseLeave}
//             >
//                 <span id={'hw9-day'}>{stringDay}</span>,{' '}
//                 <span id={'hw9-time'}>
//                     <strong>{stringTime}</strong>
//                 </span>
//             </div>
//
//             <div id={'hw9-more'}>
//                 <div className={s.more}>
//                     {show ? (
//                         <>
//                             <span id={'hw9-month'}>{stringMonth}</span>,{' '}
//                             <span id={'hw9-date'}>{stringDate}</span>
//                         </>
//                     ) : (
//                         <>
//                             <br/>
//                         </>
//                     )}
//                 </div>
//             </div>
//
//             <div className={s.buttonsContainer}>
//                 <SuperButton
//                     id={'hw9-button-start'}
//                     disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
//                     onClick={start}
//                 >
//                     start
//                 </SuperButton>
//                 <SuperButton
//                     id={'hw9-button-stop'}
//                     disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
//                     onClick={stop}
//                 >
//                     stop
//                 </SuperButton>
//             </div>
//         </div>
//     )
// }
//
// export default Clock

import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)


    const start = () => {
        console.log(date)
        setShow(true)
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        setTimerId(Number(intervalId))

        if (show === false) {
            return () => {
                clearInterval(timerId)
            }
        }

        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        clearInterval(timerId)
        setShow(false)
        setTimerId(undefined)

        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка

    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена

    }
    const time = new Intl.DateTimeFormat('ru',{
        hour:'numeric',
        minute:'numeric',
        second:'numeric'
    })
    const year = new Intl.DateTimeFormat('ru',{
        year: "numeric",
        month: "numeric",
        day: "numeric"
    })
    const stringTime = time.format(date)/*date?.toLocaleTimeString()*//*new Intl.DateTimeFormat([String(date), ("ru")])*/ || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = year.format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const mondayTuesday = new Intl.DateTimeFormat('en-US',{
        weekday: "long",
    })
    const month = new Intl.DateTimeFormat('en-US',{
        month: "long",
    })
    const stringDay = mondayTuesday.format(date) || <br/> // пишут студенты
    const stringMonth = month.format(date) || <br/> // пишут студенты

    const [moveMouse,setMoveMouse]=useState(false)
    const onMouseEnterH=()=>{setMoveMouse(true)}
    const onMouseOutH=()=>{setMoveMouse(false)}


    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnterH}
                onMouseLeave={onMouseOutH}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {moveMouse ? (
                        <>
                            <span id={'hw9-date'}>{stringDate}</span>,{' '}
                            <span id={'hw9-month'}>{stringMonth}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={show} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!show} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
