var tejaswi = 10, krishna = 10;
var array = [];

if (tejaswi === krishna)
{
    console.log('krishna is lucky');
    
    for(var i=0;i<10;i++)
    {
        array.push(tejaswi * i)
        console.log('array',array, array.length);
    }

}
else {console.log('krishna is not lucky')}
