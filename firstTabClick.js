btnFirstTabClickEventGen.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // let [tab] = await chrome.tabs.query({ active: true});
    // let [tab] = await chrome.tabs.query();

    // chrome.scripting.executeScript({
    //     target: {tabId: tab.id},
    //     function: consoleLog
    // })

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['./injectListener.js'],
        // function: setFirstTabOpenEvent,
    });
});

// function consoleLog(){
//     console.log(result)
// }