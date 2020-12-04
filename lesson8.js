//- Дана textarea.
//В неё вводится текст.
//Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
//let texst = document.getElementById('text1');
//
//texst.value = localStorage.getItem('text');
//
//
//texst.oninput = (ev) =>{
//console.log(ev.target.value)
//    
//localStorage.setItem('text',ev.target.value);
//localStorage.setItem('ddd')
//}
//localStorage.removeItem('text');


//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
//Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//Сделайте ваш скрипт как можно более универсальным.
////
//let tex = document.getElementById('tex');
//let input1 = document.getElementById('input1');
//let input2 = document.getElementById('input2');
//let checkbox1 = document.getElementById('check1');
//let checkbox2 = document.getElementById('check2');
//let checkbox3 = document.getElementById('check3');
//let radio1 = document.getElementById('radio1');
//let radio2 = document.getElementById('radio2');
//let radio3 = document.getElementById('radio3');
//let btn1 = document.getElementById('btn1');
//
//let form1 = document.getElementById('form1');
//function saveForm(save){
    //    setDataForm(save)  
    //}
    //  function setDataForm(tag){
        //      for(let i = 0;i < tag.lenght;i++){
            //          let tagElement = tag[i]
            //          console.log( tagElement );
            //if(tagElement.type === 'checkbox' || tagElement.type === 'radio')
            //tagElement.checked
            //? tagElement.value =true
            //: tagElement.value = false
            //
            //
            //localStorage.setItem(tagElement.id, tagElement.value)
            //        }
            //    }
       


//  form.oninput = (ev) => {
//    localStorage.setItem('text',ev.target.value);
//    btn1.onclick = (evs) =>{
//        localStorage.setItem('Save data',evs.target.value);
//    }
//  };
//
//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, 
//затем еще поредактировать и возможно еще.....
//Требование : хранить историю своих изменений (даже после перезагрузки страницы).
//Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// //
// //let text = document.getElementById('text');
// //let save = document.getElementById('save');
// //
// //let arrow_left = document.getElementById('arrow_left');
// //let arrow_right= document.getElementById('arrow_right');
// //
// //
// //
// //save.onclick = ()=>{
// //localStorage.setItem( text.value);
// //}
// //
//function fixationChek (){
// //
// //
// //
// }
//
//function seveText (sev){
//sev.localStorage.setItem(texstarea);
//
//}

//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
//Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
//Данные вводить через соответсвующую форму.
//--Каждому контакту добавить кнопку для удаления контакта.
//--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

























