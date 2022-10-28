function removeDuplicate(string) {
  return string
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}

console.log(removeDuplicate("the quick brown fox jumps then quickly blow air"));
