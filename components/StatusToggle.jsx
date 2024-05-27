import ButtonOpacity from "./ButtonOpacity";

export default function StatusToggle({ setShowStatus, showStatus }) {
  return (
    <ButtonOpacity
      icon={showStatus ? "EyeOff" : "Eye"}
      iconColor="#18A34A"
      iconSize={20}
      onPress={setShowStatus}
    />
  );
}
