(function() {
    // Store original function
    var _updateVirtualMouse = TouchInput._updateVirtualMouse;

    // Override function to prevent mouse movement
    TouchInput._updateVirtualMouse = function() {
        // Call original function
        _updateVirtualMouse.call(this);

        // Set mouse position to current touch position to prevent movement
        this._mouseX = this._x;
        this._mouseY = this._y;
    };
})();
