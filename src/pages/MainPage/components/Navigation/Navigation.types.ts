export type NavigationProps = {
  cities: string[];
  activeCity: string;
  onChangeCity: (city: string) => void;
}
