import * as cE from "./modules/const-elem.js";
import * as css from "./modules/css-attr.js";
import * as fn from "./modules/fn.js";
import * as not from "./modules/notification.js";
import * as pair from "./modules/pair.js";
import * as remote from "./modules/remote.js";

////////////////
/// SEQUENCE ///

cE.convertBtn.addEventListener(
  "click",
  () => {
    cE.seq.getElementsByClassName(css.exonClass).length
      ? fn.info(not.iSequenceAlreadyConverted)
      : fn.joinExons(cE.seq.innerText);
  },
  false
);

cE.seq.addEventListener(
  "paste",
  (event) => {
    if (cE.convertOnPaste.checked) {
      event.preventDefault();
      fn.joinExons(event.clipboardData.getData("text"));
    }
  },
  false
);

///////////////////
/// PRIMER PAIR ///

// Add the first primer pair.
pair.appendEmpty();

cE.addPrimerPairBtn.addEventListener("click", pair.appendEmpty, false);
cE.removeAllPrimerPairsBtn.addEventListener("click", pair.removeAll, false);

["paste", "click", "input"].forEach((eventType) => {
  cE.primerPairList.addEventListener(eventType, pair.handleEvent, false);
});

//////////////
/// REMOTE ///

cE.species.addEventListener("input", remote.findTaxons, false);
cE.findSeqBtn.addEventListener("click", remote.findSeq, false);
cE.findPrimersBtn.addEventListener("click", remote.findPrimers, false);
