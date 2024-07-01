function formatPhoneNumber(phoneNumber: string) {
  const countryCode = phoneNumber.slice(0, 2);
  const areaCode = phoneNumber.slice(2, 4);
  const part1 = phoneNumber.slice(4, 9);
  const part2 = phoneNumber.slice(9);

  return `+${countryCode} (${areaCode}) ${part1}-${part2}`;
}

export default formatPhoneNumber;
