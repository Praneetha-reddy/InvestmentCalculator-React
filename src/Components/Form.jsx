export default function Form({ onChange, input }) 
{
    return (
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              value={input.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
              required
            />
          </p>
          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              value={input.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input
              type="number"
              value={input.expectedReturn}
              onChange={(event) => onChange("expectedReturn", event.target.value)}
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              type="number"
              value={input.duration}
              onChange={(event) => onChange("duration", event.target.value)}
            />
          </p>
        </div>
      </div>
    );
  }
  