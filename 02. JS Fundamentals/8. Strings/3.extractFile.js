function solve(text) {
    let file = text.split('\\').pop();
    let dotIndex = file.lastIndexOf('.');
    let fileName = file.substring(0, dotIndex);
    let extension = file.substring(dotIndex+1);
    

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');
solve('C:\\Projects\\Data-Structures\\template.bak.pptx');