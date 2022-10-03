
const work_current_stat = document.querySelector('#work-stat-current');
const work_previous_stat = document.querySelector('#work-previous-stat');

const study_current_stat = document.querySelector('#study-stat-current');
const study_previous_stat = document.querySelector('#study-previous-stat');

const play_current_stat = document.querySelector('#play-stat-current');
const play_previous_stat = document.querySelector('#play-previous-stat');

const exercise_current_stat = document.querySelector('#exercise-stat-current');
const exercise_previous_stat = document.querySelector('#exercise-previous-stat');

const social_current_stat = document.querySelector('#social-stat-current');
const social_previous_stat = document.querySelector('#social-previous-stat');

const self_care_current_stat = document.querySelector('#self-care-stat-current');
const self_care_previous_stat = document.querySelector('#self-care-previous-stat');


/// action links

const daily_el = document.querySelector('#daily');
const weekly_el = document.querySelector('#weekly');
const monthly_el = document.querySelector('#monthly');


/// import json file

import JSON from './data.json' assert { type: "json" };
const data = JSON;


function daily(json){

    work_current_stat.innerHTML = json[0].timeframes.daily.current + 'hrs';
    work_previous_stat.innerHTML = 'Last day - ' + json[0].timeframes.daily.previous + ' hrs';

    play_current_stat.innerHTML = json[1].timeframes.daily.current + 'hrs';
    play_previous_stat.innerHTML = 'Last day - ' + json[1].timeframes.daily.previous + ' hrs';

    study_current_stat.innerHTML = json[2].timeframes.daily.current + 'hrs';
    study_previous_stat.innerHTML = 'Last day - ' + json[2].timeframes.daily.previous + ' hrs';

    exercise_current_stat.innerHTML = json[3].timeframes.daily.current + 'hrs';
    exercise_previous_stat.innerHTML = 'Last day - ' + json[3].timeframes.daily.previous + ' hrs';

    social_current_stat.innerHTML = json[4].timeframes.daily.current + 'hrs';
    social_previous_stat.innerHTML = 'Last day - ' + json[4].timeframes.daily.previous + ' hrs';

    self_care_current_stat.innerHTML = json[5].timeframes.daily.current + 'hrs';
    self_care_previous_stat.innerHTML = 'Last day - ' + json[5].timeframes.daily.previous + ' hrs';

}

function weekly(json){

    work_current_stat.innerHTML = json[0].timeframes.weekly.current + 'hrs';
    work_previous_stat.innerHTML = 'Last week - ' + json[0].timeframes.weekly.previous + ' hrs';

    play_current_stat.innerHTML = json[1].timeframes.weekly.current + 'hrs';
    play_previous_stat.innerHTML = 'Last week - ' + json[1].timeframes.weekly.previous + ' hrs';

    study_current_stat.innerHTML = json[2].timeframes.weekly.current + 'hrs';
    study_previous_stat.innerHTML = 'Last week - ' + json[2].timeframes.weekly.previous + ' hrs';

    exercise_current_stat.innerHTML = json[3].timeframes.weekly.current + 'hrs';
    exercise_previous_stat.innerHTML = 'Last week - ' + json[3].timeframes.weekly.previous + ' hrs';

    social_current_stat.innerHTML = json[4].timeframes.weekly.current + 'hrs';
    social_previous_stat.innerHTML = 'Last week - ' + json[4].timeframes.weekly.previous + ' hrs';

    self_care_current_stat.innerHTML = json[5].timeframes.weekly.current + 'hrs';
    self_care_previous_stat.innerHTML = 'Last week - ' + json[5].timeframes.weekly.previous + ' hrs';

};

function monthly(json){

    work_current_stat.innerHTML = json[0].timeframes.monthly.current + 'hrs';
    work_previous_stat.innerHTML = 'Last month - ' + json[0].timeframes.monthly.previous + ' hrs';

    play_current_stat.innerHTML = json[1].timeframes.monthly.current + 'hrs';
    play_previous_stat.innerHTML = 'Last month - ' + json[1].timeframes.monthly.previous + ' hrs';

    study_current_stat.innerHTML = json[2].timeframes.weekly.current + 'hrs';
    study_previous_stat.innerHTML = 'Last month - ' + json[2].timeframes.monthly.previous + ' hrs';

    exercise_current_stat.innerHTML = json[3].timeframes.monthly.current + 'hrs';
    exercise_previous_stat.innerHTML = 'Last month - ' + json[3].timeframes.monthly.previous + ' hrs';

    social_current_stat.innerHTML = json[4].timeframes.monthly.current + 'hrs';
    social_previous_stat.innerHTML = 'Last month - ' + json[4].timeframes.monthly.previous + ' hrs';

    self_care_current_stat.innerHTML = json[5].timeframes.monthly.current + 'hrs';
    self_care_previous_stat.innerHTML = 'Last month - ' + json[5].timeframes.monthly.previous + ' hrs';

};


//////////////// DEFAULT START ////////////////////

weekly(data);





daily_el.addEventListener('click', ()=>{
    console.log('click');
    daily_el.classList.toggle('active');
    daily(data);

    if (daily_el.classList.contains('active')) {
        weekly_el.classList.remove('active');
        monthly_el.classList.remove('active');
    }

});

weekly_el.addEventListener('click', ()=>{
    console.log('click');
    weekly_el.classList.toggle('active');
    weekly(data);

    if (weekly_el.classList.contains('active')) {
        daily_el.classList.remove('active');
        monthly_el.classList.remove('active');
    }

});

monthly_el.addEventListener('click', ()=>{
    console.log('click');
    monthly_el.classList.toggle('active');
    monthly(data);

    if (monthly_el.classList.contains('active')) {
        daily_el.classList.remove('active');
        weekly_el.classList.remove('active');
    }
    
});

