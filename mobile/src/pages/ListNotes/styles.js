import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#F5F5F7",
    position: "relative",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000120",
    marginBottom: 10,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  noteContainer: {
    width: "45%",
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  noteContent: {},
  buttonAdd: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 0,
    backgroundColor: "#1366FF",
  },
});
