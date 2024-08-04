function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

function mul(a,b)
{
    return a*b;
}

function div(a,b)
{
    if(b==0)
        throw new Error('Cannot Divide by 0');
    else
        return a/b;
}

module.exports = {add,sub,mul,div};
