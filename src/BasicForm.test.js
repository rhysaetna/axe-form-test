import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import BasicForm from "./BasicForm";

describe("The <BasicForm /> component", () => {
  it("should not fail any accessibility tests", async () => {
    const { container } = render(<BasicForm />);
    expect(await axe(container)).toHaveNoViolations();
  });
  
});
