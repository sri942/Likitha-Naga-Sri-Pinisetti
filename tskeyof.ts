interface Hostel{
    name:string;
    fee:number;
}
function printroomVacancy(room:Hostel,vacancy:keyof Hostel){
    console.log(`Printing room vacany ${vacancy}:"${room[vacancy]}"`);

}
let room={
    name:"athidhi",
    fee:5000
};
printroomVacancy(room,"name");
