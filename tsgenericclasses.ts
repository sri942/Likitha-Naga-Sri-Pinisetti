//generics are used to create generalized classes
class KeyValuePair<T,U>
{
    private key:T;
    private val:U;
    setKeyValue(key:T,val:U):void{
        this.key=key;
        this.val=val;
    }
    display():void{
        console.log(`Key=${this.key},val=${this.val}`);

    }
}
let kvp1=new KeyValuePair<number,string>();
kvp1.setKeyValue(10,"samantha");
kvp1.display();
let kvp2=new KeyValuePair<string,string>();
kvp2.setKeyValue("lee min ho","jung hae in");
kvp2.display();