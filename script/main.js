//CUSTOM ELEMENTS
class TransactionForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .form-group {
                    margin-bottom: 1em;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-20px);
                    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, transform 0.5s ease-in-out;
                }
                .form-group.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                label {
                    display: block;
                    margin-bottom: 0.5em;
                    font-weight: bold; /* Teks tebal */
                }
                input {
                    width: 100%;
                    padding: 0.5em;
                }
                .hidden {
                    display: none;
                }
                .input-group {
                    display: flex;
                    align-items: center;
                }
                .input-group label {
                    margin-right: 10px;
                    font-size: 1.2em;
                    font-weight: bold;
                    color: white;
                }
                .input-group input {
                    flex: 1;
                }
            </style>
            <form id="transactionForm" autocomplete="off">
                <div class="form-group visible">
                    <label>Kebutuhan</label>
                    <div class="input-group">
                        <label for="kebutuhan">Rp</label>
                        <input type="text" id="kebutuhan" name="kebutuhan" autocomplete="off" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Keinginan</label>
                    <div class="input-group">
                        <label for="keinginan">Rp</label>
                        <input type="text" id="keinginan" name="keinginan" autocomplete="off" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Uang Saku</label>
                    <div class="input-group">
                        <label for="uangSaku">Rp</label>
                        <input type="text" id="uangSaku" name="uangSaku" autocomplete="off" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Tabungan</label>
                    <div class="input-group">
                        <label for="tabungan">Rp</label>
                        <input type="text" id="tabungan" name="tabungan" autocomplete="off" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Total Pengeluaran</label>
                    <div class="input-group">
                        <label for="totalPengeluaran">Rp</label>
                        <input type="text" id="totalPengeluaran" name="totalPengeluaran" autocomplete="off" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Total Pemasukan</label>
                    <div class="input-group">
                        <label for="totalPemasukan">Rp</label>
                        <input type="text" id="totalPemasukan" name="totalPemasukan" autocomplete="off" required>
                    </div>
                </div>
            </form>
        `;

        // Fungsi untuk memformat angka dengan koma
        const formatNumberWithCommas = (number) => {
            return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        // Event listener untuk setiap input
        this.querySelectorAll('input').forEach((input, index, inputs) => {
            input.addEventListener('input', () => {
                // Hapus karakter yang bukan angka
                input.value = input.value.replace(/[^0-9]/g, '');

                // Format nilai input dengan koma
                input.value = formatNumberWithCommas(input.value.replace(/,/g, ''));

                // Jika input tidak kosong dan bukan input terakhir
                if (input.value.trim() !== '' && index < inputs.length - 1) {
                    // Tampilkan input berikutnya
                    const nextInputGroup = inputs[index + 1].parentElement.parentElement;
                    nextInputGroup.classList.add('visible');
                }
            });
        });

        
    }
}
customElements.define('transaction-form', TransactionForm);