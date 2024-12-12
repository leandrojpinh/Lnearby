import { Text, View } from "react-native";
import { s } from "./styles";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>
      
      <Step icon={IconMapPin}  description="Veja locais perto de você que são parceiros Nearby" title="Encontre estabelecimentos" />
      <Step icon={IconQrcode} description="Escaneie o código no estabelecimento para usar o benefício" title="Ative o cupom com QR Code" />
      <Step icon={IconTicket} description="Ative cupons onde estiver, em diferentes tipos de estabelecimento " title="Garanta vantagens perto de você" />
    </View>
  )
}