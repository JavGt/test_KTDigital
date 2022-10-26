import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { MathJaxContext } from "better-react-mathjax";
import ItemNestedTable from "./components/ItemNestedTable/ItemNestedTable";
import ItemTable from "./components/ItemTable/ItemTable";
import { testData3, testData } from "./testData";
const TableComponent = () => {

	const data = testData;
	const config = {
		loader: { load: ["[tex]/html"] },
		tex: {
			packages: { "[+]": ["html"] },
			inlineMath: [
				["$", "$"],
				["\\(", "\\)"]
			],
			displayMath: [
				["$$", "$$"],
				["\\[", "\\]"]
			]
		}
	};

	return (
		<MathJaxContext version={3} config={config}>
			<div>
				<h1>Test table</h1>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								{
									data.headers.map((header, index) => (
										header.value.map((value, index) => (
											<TableCell key={index} align="center">{value.value}</TableCell>
										))
									))
								}
							</TableRow>
						</TableHead>
						<TableBody>
							{
								data.rows.map((row, index) => (
									Object.hasOwnProperty.call(row, "childTable") ? (
										<ItemNestedTable key={index} data={row.childTable} />
									) : (
										<TableRow key={index}>
											{
												row.data.map((data, index) => (
													<TableCell key={index} align="center">
														{
															data.value.map((value, index) => (
																<ItemTable key={index} value={value} />
															))
														}
													</TableCell>
												))
											}
										</TableRow>
									)
								))
							}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</MathJaxContext>
	)
};

export default TableComponent;