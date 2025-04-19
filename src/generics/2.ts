// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
// Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType.
// Функція compare повинна повертати AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// export default function compare<
//   T extends Pick<AllType, 'name' | 'color'>,
//   S extends Pick<AllType, 'position' | 'weight'>
// >(top: T, bottom: S): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// export const top: Pick<AllType, 'name' | 'color'> = {
//   name: 'x',
//   color: '#fff',
// };

// export const bottom: Pick<AllType, 'position' | 'weight'> = {
//   position: 20,
//   weight: 20,
// };

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare<
//   T extends Pick<AllType, 'name' | 'color'>,
//   U extends Pick<AllType, 'position' | 'weight'>
// >(top: T, bottom: U): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }
