class Canvas {
  constructor(divId) {
      this.divId = divId; // The ID of the DIV element where the diagram will be rendered
      this.graph = new joint.dia.Graph; // The graph model storing elements and links
      this.paper = new joint.dia.Paper({ // The paper is the visual representation of the graph model
          el: document.getElementById(divId),
          model: this.graph,
          width: 800, // Adjust size as needed
          height: 600,
          gridSize: 1,
          background: {
              color: 'rgba(0, 0, 0, 1)' // Optional: to visualize the canvas area, you can set a background color
          }
      });
  }

  // Example method to add a simple rectangle element to the graph
  addRectangle() {
      const rect = new joint.shapes.standard.Rectangle();
      rect.position(100, 30);
      rect.resize(100, 40);
      rect.attr({
          body: {
              fill: 'blue'
          },
          label: {
              text: 'Hello, JointJS!',
              fill: 'white'
          }
      });
      rect.addTo(this.graph);
  }

  // Similar methods can be added to create different types of elements and links
}
