import React, { useState } from "react";
import styles from "./Home.module.scss";

const rooms = [
  {
    id: 1,
    value: "1",
  },
  {
    id: 2,
    value: "2",
  },
  {
    id: 3,
    value: "3",
  },
  {
    id: 4,
    value: "4",
  },
  {
    id: 5,
    value: "5",
  },
  {
    id: 6,
    value: "6",
  },
  {
    id: 7,
    value: "7",
  },
  {
    id: 8,
    value: "8",
  },
  {
    id: 9,
    value: "9",
  },
  {
    id: 10,
    value: "10",
  },
];

const floors = [
  {
    id: 3,
    value: "3",
  },
  {
    id: 4,
    value: "4",
  },
  {
    id: 5,
    value: "5",
  },
  {
    id: 6,
    value: "6",
  },
  {
    id: 7,
    value: "7",
  },
  {
    id: 8,
    value: "8",
  },
  {
    id: 9,
    value: "9",
  },
  {
    id: 10,
    value: "10",
  },
  {
    id: 11,
    value: "11",
  },
  {
    id: 12,
    value: "12",
  },
  {
    id: 13,
    value: "13",
  },
  {
    id: 14,
    value: "14",
  },
  {
    id: 15,
    value: "15",
  },
  {
    id: 16,
    value: "16",
  },
  {
    id: 17,
    value: "17",
  },
  {
    id: 18,
    value: "18",
  },
  {
    id: 19,
    value: "19",
  },
  {
    id: 20,
    value: "20",
  },
  {
    id: 21,
    value: "21",
  },
  {
    id: 22,
    value: "22",
  },
  {
    id: 23,
    value: "23",
  },
  {
    id: 24,
    value: "24",
  },
  {
    id: 25,
    value: "25",
  },
  {
    id: 26,
    value: "26",
  },
  {
    id: 27,
    value: "27",
  },
];

const Home = () => {
  const [form, setForm] = useState({
    tower: "",
    floor: "",
    room: "",
    date: "",
    time: "",
    commentary: "",
  });

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
  };

  const clearField = (e) => {
    e.preventDefault();
    setForm({
      tower: "",
      floor: "",
      room: "",
      date: "",
      time: "",
      commentary: "",
    });
  };

  return (
    <>
      <div className={styles.window}>
        <form>
          <div className={styles.window__flex}>
            <span>Выбор башни:</span>
            <select
              value={form.tower}
              onChange={(e) => setForm({ ...form, tower: e.target.value })}
            >
              <option value="A">А</option>
              <option value="B">Б</option>
            </select>
          </div>
          <div className={styles.window__flex}>
            <span>Выбор этажа:</span>
            <select
              onChange={(e) => setForm({ ...form, floor: e.target.value })}
            >
              {floors.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.window__flex}>
            <span>Выбор переговорки:</span>
            <select
              onChange={(e) => setForm({ ...form, room: e.target.value })}
            >
              {rooms.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.window__flex}>
            <span>Выбор даты:</span>
            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            ></input>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            ></input>
          </div>
          <textarea
            value={form.commentary}
            onChange={(e) => setForm({ ...form, commentary: e.target.value })}
            placeholder="Наберите комментарий"
            style={{ resize: "none", fontSize: "16px" }}
          ></textarea>
          <button
            className={styles.button__send}
            onClick={(e) => sendMessage(e)}
          >
            Отправить
          </button>
          <button className={styles.button__clear} onClick={clearField}>
            Очистить
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
