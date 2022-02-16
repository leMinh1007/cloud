
N = 5;
H = 8;
string = "";

for(row=0; row <= 2*(H -1); row++){
    for(col=0; col <= N*2*(H - 1); col++) {
        xcol = col % (H - 1) ;
        xcol2 = col % (2*(H - 1)) ;
        xrow = Math.abs(H-1-row);   
        if ( xrow == 0 // truc giua)
             || ( xrow == xcol)
             || ( row == 0 && xcol2 <= H-1)
             || ( row == 2* (H-1)&& ( xcol2 >= H -1 || xcol2 == 0 ))
             ) {
        string += "+";
      } else {
        string += " ";
    }
    str += "\n";
}
console.log(String);