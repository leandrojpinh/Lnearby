import { FlatList } from "react-native";
import { s } from "./styles";
import { Category } from "../category";

export type CategoriesProps = {
  id: string,
  name: string
}[];

type Props = {
  data: CategoriesProps,
  selected: string,
  onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      style={s.container}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => <Category isSelected={item.id === selected} iconId={item.id} name={item.name} onPress={() => onSelect(item.id)} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.content}
    />
  )
}