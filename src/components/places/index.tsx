import { useRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Text, useWindowDimensions, View } from "react-native";

import { s } from "./styles";
import { Place, PlaceProps } from "../place";

type Props = {
  data: PlaceProps[]
}

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottonSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128
  }
  return (
    <BottomSheet
      ref={bottonSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
      maxDynamicContentSize={snapPoints.max}
    >
      <BottomSheetFlatList
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Explore locais perto de você</Text>
        )}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        showsVerticalScrollIndicator={false}
      />

    </BottomSheet>
  )
}