/*
* 1.固定大小 一旦声明不可以更改大小
* 2.和数组存储方式大致相同，buffer存储的是16进制 （10进制逢10进一  逢16进一 最大的是f 0-9 abcdef  0xff  ）
* 默认是数据传输时是2进制 存到buffer中变成16进制的
* 8bit =1b 一个字节等于8个位 都是二进制的 由8个二进制组成
* 1个汉字utf8编码有几个字节  3个字节  node不支持gbk 一个汉字由多少位组成24 位组成
* 1024B =1kb
* 1024kb = 1m
* */
/*
*将任意进制转换成10进制     当前所在位的值*进制^当前所在位
*11111111          1*2^7...+1*2^1+1*2^0 = ? 255
*100000000 = 2^8 - 1
*0xff       15*16^1+15*16^0 =  255
*010 八进制   1*8^1 = 8  八进制中的10 相当于10进制的8
*/
var sum = 0;
for(var i = 0;i<8;i++){
    sum+=Math.pow(2,i);
}
console.log(sum);


