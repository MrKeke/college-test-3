export default function solution(content) {
  // BEGIN
  export default function solution(content) {
  // BEGIN
  const data = content
    .split("\n")
    .map((el) =>
      el
        .trim()
        .split("|")
        .flatMap((eli) => {
          return eli === "" ? [] : eli.trim();
        })
    )
    .slice(2);
  console.log(`Растений в файле ${data.length}`);
  const sortDataByABC = data
    .map((el) => {
      const firstSymbol = el[0].slice(0, 1);
      el[0] = `${firstSymbol.toUpperCase()}${el[0].slice(1)}`;
      return el[0];
    })
    .sort((a, b) => a.localeCompare(b));
  console.log(
    `список растений в алфавитном порядке ${sortDataByABC.join(" ")}`
  );
  const sortByDanger = [0, 0];
  data.forEach((element) =>
    element[4] === "Нет" ? (sortByDanger[0] += 1) : (sortByDanger[1] += 1)
  );
  console.log(
    `Процент опасных растений относительно безопасных примерно равен ${(
      sortByDanger[1] / sortByDanger[0]
    )
      .toString()
      .slice(0, 3)}`
  );
  let liveTime = 0;
  const onlyForestPlant = data.forEach((el) => {
    // console.log(el[1])
    if (el[1].includes("Леса")) {
      let live = el[3];
      const indexOfNothig = live.indexOf(" ");
      live = live.slice(0, indexOfNothig);
      live = live.split("-");
      liveTime +=
        live.length === 2
          ? (Number(live[0]) + Number([live[1]])) / live.length
          : Number(live[0]);
    }
  });
  console.log(`Среднее время жизни лесных растений равно ${liveTime}`);
  const danger = {};
  data.forEach((el) => {
    if (el[4] === "Да") {
      el[1]
        .split(" ")
        .map((el) =>
          danger[el] === undefined ? (danger[el] = 1) : (danger[el] += 1)
        );
    }
  });
  const answer = Object.entries(danger).sort(
    ([, countA], [, countB]) => countB - countA
  );
  console.log(
    `Больше всего опасных для человека растений находятся в локации "${answer[0][0]}", а именно ${answer[0][1]}`
  );
  // END
}

  // END
}
