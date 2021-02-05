class Receiver{

    askString(msg){
        return prompt(msg);
    }

    askNumber(msg){
        return new Number(prompt(msg));
    }

    askListNumber(msg,n){
        let list = [];
        for (let index = 0; index < n; index++) {
            list.push(new Number(prompt((msg)+"n = "+index)));
        }
        return list;
    }
}