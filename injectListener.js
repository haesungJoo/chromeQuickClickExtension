function ctrlKeyEnterListener(event){
    const keyName = event.key;

    if(event.ctrlKey){
        if(event.key === 'Enter'){
            document.querySelector('#search a').setAttribute('target','_blank')
            document.querySelector('#search a').click()
            // console.log(event.key)
        }
    }
}

function setFirstTabOpenEvent(){
    document.addEventListener('keydown', ctrlKeyEnterListener, false)
}

(
    function(){
        console.log('First Tab Clicked Extension Active')
        setFirstTabOpenEvent()
    }
)()