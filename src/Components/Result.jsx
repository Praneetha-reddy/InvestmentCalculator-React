import { calculateInvestmentResults, formatter } from "../util/Investment";
export default function Result({ input }) 
{
  const results = calculateInvestmentResults(input);
  const initialInvestment = results[0].valueEndOfYear - results[0].annualInvestment - results[0].interest;
  return (
    <table id="result">
        <thead>
            <tr>
                <th>year</th>
                <th>Investment value</th>
                <th>Interest(year)</th>
                <th>Total Interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>{
            
            results.map(result => {
            const totalInterest = result.valueEndOfYear - initialInvestment - (result.year * result.annualInvestment);
            const investedCapital = result.valueEndOfYear - totalInterest;
                return (<tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>)})
            }
        </tbody>
    </table>
  );
}
