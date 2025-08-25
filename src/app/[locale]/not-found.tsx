import Error from "../../components/Error";
export default async function NotFound() {
	const dir = "rtl";
	return <Error dir={dir} />;
}
