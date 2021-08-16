export const makeSmallerText = (length, tabStr) => {

    let outputTab = [];
    let str = "";

    tabStr.forEach(element => {
        if (element.length > length)    
        {
            str = element.substring(0, length - 3);
            str += "...";
            outputTab.push(str)
        }
        else
        {
            outputTab.push(element);
        }
    })

    return outputTab;
}