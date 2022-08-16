function T2() {
    return (<form>
        <h3>T2</h3>
        <div className="mb-3">
            <label>File Upload</label>
            <input
                type="file"
                className="form-control"
                placeholder="Choose File"
            />
        </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Upload
            </button>
        </div>
    </form>);
}

export default T2;