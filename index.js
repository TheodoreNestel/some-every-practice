

    //some 

    function hasOddNumber(arr){

        arr.some(function(val){

            console.log(val);
            return val % 2 !== 0;

        })

    }


    function hasAZero(num){

        return num.toString().split('').some(function(val){

          return val === '0';

        })

      }

//every

function hasOnlyOddNumber(arr)
{


   return arr.every(function(val){
        return val % 2 !== 0;
    })


}


function hasNoDuplicates(arr){
    return arr.every(function(val){

        return arr.indexOf(val) === arr.lastIndexOf(val);

    });
}


function hasCertainKey(obj , key ){

return obj.every(function(val){

   return obj in val ;

})

}


function hasCertainValue(arr, key, searchValue){

    return arr.every(function(val){

      return val[key] === searchValue;
      
    })
  }
