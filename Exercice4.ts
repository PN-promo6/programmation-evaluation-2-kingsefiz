function isSingle(array:string[],testString:string){
    let i:number = 0;
    let j:number = 0;
    let currentElement:string;
    let isUnique:boolean;

    while (i < array.length) {
      currentElement = array[i];
      if (currentElement == testString) {
        j++
      }
      i++
    }

    if (j == 1) {
      isUnique = true;
      console.log(isUnique)
    } else {
      isUnique = false;
      console.log(isUnique)
    }
  }

let tab:string[] = ["foo","bar","bar","bar","baz"]

isSingle(tab,"bar")
