import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import { useState } from "react";
import "./ExtraSecurity.css";

export default function ExtraSecurity(props) {
  const [showFormModal, setShowFormModal] = useState(false);
  const [keys, setKeys] = useState();

  async function createSecuritKeys(event) {
    event.preventDefault();
    const response = await repositoryManagementApi.createSecurityKeys({
      email: props.user.email,
      keys: [
        { key: keys.key1, reference: keys.reference1 },
        { key: keys.key2, reference: keys.reference2 },
        { key: keys.key3, reference: keys.reference3 },
      ],
    });

    try {
      if (response.message.includes("Security keys already registered")) {
        alert("Security keys already registered.");
      }
    } catch (err) {
      alert("Security keys created.");
      window.location.reload();
    }
  }

  return (
    <div className="ExtraSecurity">
      {props.hasKeys === 2 ? (
        <button
          className="ExtraSecurity__openButton"
          id="ExtraSecurityEnabled"
          type="button"
        >
          Extra security enabled!
        </button>
      ) : props.hasKeys === 1 ? (
        <button
          className="ExtraSecurity__openButton"
          type="button"
          onClick={() => setShowFormModal(true)}
        >
          Enable extra security
        </button>
      ) : (
        <span></span>
      )}

      {showFormModal === false ? (
        <span></span>
      ) : (
        <section className="ExtraSecurity__modal">
          <form
            className="ExtraSecurity__modal--form"
            onSubmit={createSecuritKeys}
          >
            <p className="ExtraSecurity__intro">
              This extra security is used in case you forget your password.
              Submit 3 keys with references for you to remember them.
            </p>
            <br />
            <label>First key</label>
            <input
              type="text"
              placeholder="Key #1"
              onChange={(event) =>
                setKeys({ ...keys, key1: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="Reference #1"
              onChange={(event) =>
                setKeys({ ...keys, reference1: event.target.value })
              }
            />
            <label>Second key</label>
            <input
              type="text"
              placeholder="Key #2"
              onChange={(event) =>
                setKeys({ ...keys, key2: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="Reference #2"
              onChange={(event) =>
                setKeys({ ...keys, reference2: event.target.value })
              }
            />
            <label>Third key</label>
            <input
              type="text"
              placeholder="Key #3"
              onChange={(event) =>
                setKeys({ ...keys, key3: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="Reference #3"
              onChange={(event) =>
                setKeys({ ...keys, reference3: event.target.value })
              }
            />

            <div className="ExtraSecurity__modal--buttons">
              <button type="submit">SUBMIT</button>
              <button type="button" onClick={() => window.location.reload()}>
                CLOSE
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
