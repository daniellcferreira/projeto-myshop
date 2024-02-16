import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";

const cart = products.slice(0, 2);

jest.mock("react-redux", () => {
    return {

    }
});

describe("Cart > Unit tests", () => {
    it("should render an empty cart correctly", () => {
        render(<Cart showCart={true} cart={[]} />);

        const titleElement = screen.getByRole("heading");
        const totalElement = screen.getByTestId("total");
        const cartListElement = screen.getByRole("list");


        expect(titleElement).toHaveTextContent("Carrinho");
        expect(totalElement).toHaveTextContent("$0");
        expect(cartListElement).toBeEmptyDOMElement();
    });

    it("should render a cart with two products", () => {
        render(<Cart showCart={true} cart={cart} />);

        const productsItemElements = screen.getAllByRole("listitem");

        expect(productsItemElements.length).toBe(2);
    });

    it("should remove product when remove button is cliked", () => {
    })
});