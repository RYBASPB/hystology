type RegExpsForCardInfo = {
  [key in "cardNumber" | "name" | "dateOfBirth"]: RegExp
}
export const RegExps: RegExpsForCardInfo = {
  cardNumber: /НАПРАВЛЕНИЕ\sОМС\s+НА\sПРИЖИЗНЕННОЕ\sПАТОЛОГО-АНАТОМИЧЕСКОЕ\sИССЛЕДОВАНИЕ\sБИОПСИЙНОГО\s\(ОПЕРАЦИОННОГО\)\sМАТЕРИАЛА\s+(\d+\/С\d+)(?=\s)/msi,
  name: /2.\sФамилия,\sимя,\sотчество\s\(при\sналичии\)\sпациента\s+((?:[а-яё]+\s){2}(?:[а-я]+)?)(?=\s*3\.)/msi,
  dateOfBirth: /4.\sДата рождения.\s+(\d+\.\d+\.\d+\s\(\d+лет\))(?=\s*5\.)/msi
}