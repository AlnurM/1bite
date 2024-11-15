"use client"

import { useState } from "react"
import { 
  Dog, 
  Cat,
  Snail,
  Turtle,
  Bird,
  Squirrel,
  Rabbit
} from "lucide-react"
import { TextField, Button } from "@/shared/ui"
import { IProfileDetails, saveDetails } from "@/entities/profile"
import clsx from "clsx"

const activityLevels = [
  {
    level: 1.2,
    info: "Для малоподвижных людей, тренировок мало или они отсутствуют",
    icon: Snail
  },
  {
    level: 1.375,
    info: "Для людей с низкой активностью, легкие тренировки 1-3 раза в неделю или в виде эквивалента другой активности.",
    icon: Turtle
  },
  {
    level: 1.550,
    info: "Для умеренно активных людей: физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю.",
    icon: Bird
  },
  {
    level: 1.725,
    info: "Для очень активных людей: физическая работа полный день или интенсивные тренировки 6-7 раз в неделю.",
    icon: Squirrel
  },
  {
    level: 1.900,
    info: "Для предельно активных людей: тяжелая физическая работа и интенсивные тренировки/занятия спортом.",
    icon: Rabbit
  },
]
export default function Page() {
  const [form, setForm] = useState<IProfileDetails>({
    gender: "male",
    activity_level: 1.2,
    first_name: "",
    age: "",
    weight: ""
  })
  const saveDetailsWithForm = saveDetails.bind(null, form)
  return (
    <>
      <div className="px-4 py-4 flex flex-col">
        <h1 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Заполните <span className="text-chinese-green">форму</span>
        </h1>
        <form className="mt-4 flex flex-col gap-4" action={saveDetailsWithForm}>
          <div className="flex items-center gap-4">
            <label className="w-1/2 cursor-pointer">
              <div 
                className={clsx("py-16 flex flex-col items-center justify-center gap-4 bg-light-black rounded-2xl border border-solid", {
                  ["border-chinese-green"]: form.gender === "male",
                  ["border-transparent"]: form.gender != "male",
                })}
                onClick={() => setForm({ ...form, gender: "male" })}
              >
                <Dog size={96} className="text-chinese-green" />
                <span className="text-ivory-white">Мужчина</span>
              </div>
            </label>
            <label className="w-1/2 cursor-pointer">
              <div 
                className={clsx("py-16 flex flex-col items-center justify-center gap-4 bg-light-black rounded-2xl border border-solid", {
                  ["border-chinese-green"]: form.gender === "female",
                  ["border-transparent"]: form.gender != "female",
                })}
                onClick={() => setForm({ ...form, gender: "female" })}
              >
                <Cat size={96} className="text-naples-yellow" />
                <span className="text-ivory-white">Женщина</span>
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg text-white font-medium text-center">Уровень активности</span>
            <div className="flex flex-col gap-4">
              {activityLevels.map((item) => (
                <div 
                  key={item.level} 
                  className={clsx("flex items-center border border-solid rounded-2xl bg-light-black", {
                    ["border-chinese-green"]: form.activity_level === item.level,
                    ["border-transparent"]: form.activity_level !== item.level,
                  })}
                  onClick={() => setForm({ ...form, activity_level: item.level })}
                >
                  <div className="pl-4">
                    <item.icon size={32} className="text-ivory-white" />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <span className="font-medium text-chinese-green">{item.level}</span>
                    <span className="text-ivory-white text-sm">{item.info}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <TextField 
            label="Имя"
            name="name"
            value={form.first_name}
            onChange={(e) => setForm({ ...form, first_name: e.target.value })}
          />
          <TextField 
            label="Возраст"
            type="number"
            name="age"
            value={form.age}
            onChange={(e) => {
              const { value } = e.target;
              if (Number(value) < 1) {
                return setForm({ ...form, age: "1" })
              }
              setForm({ ...form, age: value })
            }}
          />
          <TextField 
            label="Вес"
            type="number"
            name="weight"
            value={form.weight}
            onChange={(e) => {
              const { value } = e.target;
              if (Number(value) < 1) {
                return setForm({ ...form, weight: "1" })
              }
              setForm({ ...form, weight: value })
            }}
          />
          <Button variant="primary" type="submit">Сохранить</Button>
        </form>
      </div>
    </>
  )
}