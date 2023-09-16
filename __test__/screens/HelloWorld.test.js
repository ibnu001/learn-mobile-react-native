import { render } from "@testing-library/react-native"
import HelloWorld from "../../src/screens/HelloWorld"

test('HelloWorld component renders correctly', () => {
    const { getByText } = render(<HelloWorld />)
    const textElement = getByText('HelloWorld')

    expect(textElement).toBeDefined()
})