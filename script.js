let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke&quot"
    };

    //a
    programming.languages.push('Go');
    
    //b
    programming.difficulty = 8;
    
    //c
     delete programming.jokes;

     //d 
     programming.isFun = true;
     
     //e
     for (let i = 0; i < programming.languages.length; i++){
        console.log(programming.languages[i]);
     };
    
     //f
     for (let key in programming){
        console.log(key);
     };

     //g
     for (let key in programming){
        console.log(programming[key]);
     };
