function one() {
    return (1);
}
function two() {
    return (one() + one());
}
function three() {
    return (two() + one());
}
function four() {
    return (three() + one());
}
function five() {
    let ans = four() + one();
    console.log(ans);
}
five();