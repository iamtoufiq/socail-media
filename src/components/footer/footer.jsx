import { Layout } from "antd";
import "./footer.css";

const FooterComponent = () => {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      Made by{" "}
      <span style={{ fontWeight: "bolder", color: "#1890ff" }}>
        Toufiq Choudhari
      </span>
    </Footer>
  );
};

export { FooterComponent };
