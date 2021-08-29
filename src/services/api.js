import { uuid } from 'uuidv4'

const lists = [
  {
    title: 'Cliente em Potencial',
    leads: [
      { id: uuid(), leadName: "Org. Internacionais" },
      { id: uuid(), leadName: "Music Sound Live Corp. infromation" }
    ],
  },
  {
    title: 'Dados Confirmados',
    leads: [
      { id: uuid(), leadName: 'Ind. Farm LTDA' }
    ],
  },
  {
    title: 'Reunião Agendada',
    leads: [],
  },
];

export function saveLead(name) {
  const data = JSON.parse(localStorage.getItem(
    "@elogroup:leads"
  ))

  data[0].leads.push({ id: uuid(), leadName: name });

  localStorage.setItem("@elogroup:leads",
    JSON.stringify(data));
}

export function getData() {
  const data = localStorage.getItem(
    "@elogroup:leads"
  );

  if (data) {
    return JSON.parse(data);
  } else {
    return lists;
  }
}

export function updateData(list) {
  localStorage.setItem("@elogroup:leads",
    JSON.stringify(list));
}

export function saveUser(user) {
  const data = JSON.parse(localStorage.getItem(
    "@elogroup:users"
  ));

  if (data) {
    data.push(user)
    localStorage.setItem("@elogroup:users", JSON.stringify(data));
  } else {
    localStorage.setItem("@elogroup:users", JSON.stringify([user]));
  }
}