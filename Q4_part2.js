function findDate(ans)
{
    var arr=ans.split('/');
    var ye=arr[2];
    var mo=arr[1];
    var year= new Date().getFullYear();
    if(mo> new Date().getMonth())
    	return(year-ye-1);
    else
    	return (year-ye);
}

module.exports.findDate=findDate;